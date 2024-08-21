import puppeteer from "puppeteer";


const TempMailo = async () => {
    const url = "https://tempmailo.com/";

    // Launch Puppeteer in headless mode (no browser window)
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    try {
        // Wait for the page to load completely before interacting
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        // Retry logic: retry up to 3 times if the selector is not found
        for (let attempt = 0; attempt < 3; attempt++) {
            try {
                // Wait for the input box to be visible and contain an email
                await page.waitForSelector('.vs-input', { visible: true, timeout: 30000 });
                await page.waitForFunction(
                    () => (document.querySelector('.vs-input') as HTMLInputElement)?.value.includes('@'),
                    { timeout: 30000 }
                );
                // Get the email from the input box
                const email = await page.evaluate(() => {
                    return (document.querySelector('.vs-input') as HTMLInputElement)?.value;
                });
                // console.log("Current email:", email);
                await browser.close();
                return email;
            } catch (innerError) {
                console.error(`Attempt ${attempt + 1} failed:`, innerError);
                if (attempt === 2) throw innerError; // Re-throw after the last attempt
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
        await browser.close();
        throw error; // Rethrow the error after logging it
    }
}

export default TempMailo;