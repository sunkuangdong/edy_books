const playwright = require('playwright');

(async () => {
    // [playwright.chromium] 使用什么内核
    for (const browserType of [playwright.chromium]) {
        // 使用 browser 创建一个 page
        const browser = await browserType.launch();
        const context = await browser.newContext();
        const page = await context.newPage();
        // goto 去哪个页面
        // await page.goto('http://www.baidu.com');
        await page.goto('http://localhost:3033/books/list');
        // screenshot 保存屏幕截图到哪个文件下
        await page.screenshot({
            path: `report/example-${browserType.name()}-${new Date()}.png`
        });
        // 测完了关闭
        await browser.close();
    }
})();