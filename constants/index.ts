
export const BASE_URL = "https://bad-api-assignment.reaktor.com/v2/";

// available categories; adding/removing categories does not affect the application
export const CATEGORIES = ["gloves", "facemasks", "beanies"];

/*
    If fetching products failed, retry RETRY_COUNT times or until success
    Normally, a single retry is enough
*/
export const RETRY_COUNT = 5;
