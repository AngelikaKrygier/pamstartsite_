const UrlApiChangeLogs =
  "http://136.243.133.115:8889/api/paminfo/GetLastedChangeLogs";
const UrlApiConceptsList = "";
const UrlApiCurrentFeature = "";

const UrlApiChangeLogsLocal = "http://localhost:3000/changeLogs.json";
const UrlApiConceptsListLocal = "http://localhost:3000/conceptsList.json";
const UrlApiCurrentFeaturesLocal = "http://localhost:3000/currentFeatures.json";

const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Błąd podczas pobierania danych: ${response.statusText}`);
  }
  return await response.json();
};

export const getChangeLogs = async () => {
  return fetchData(UrlApiChangeLogsLocal);
};

export const getConceptsList = async () => {
  return fetchData(UrlApiConceptsListLocal);
};

export const getCurrentFeatures = async () => {
  return fetchData(UrlApiCurrentFeaturesLocal);
};
