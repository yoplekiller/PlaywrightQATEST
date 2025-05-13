import { test, expect } from '@playwright/test';

test('마켓컬리 검색 테스트', async({ page }) => {

   await page.goto('https://www.kurly.com/main');
   await page.locator('.css-vdi47h').click();
   await page.getByRole('textbox', { name: '검색어를 입력해주세요' }).fill('밥');
   await page.getByRole('textbox', { name: '검색어를 입력해주세요' }).press('Enter');
   await page.getByRole('link', { name: '마감세일 담기 샛별배송 [현대옥] 황태콩나물 국밥 현대옥의 맛 그대로, 시원한 황태콩나물국밥 10,900원 10%9,810원' }).click();
   await expect(page.getByRole('heading', { name: '마감세일 담기 샛별배송 [현대옥] 황태콩나물 국밥 현대옥의 맛 그대로, 시원한 황태콩나물국밥 10,900원 10%9,810원' })).toBeVisible();
});