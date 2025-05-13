import {test, expect} from '@playwright/test';

test('일단 해보는중..', async ({ page }) => {
  await page.goto('https://www.kurly.com/main');
  await page.getByRole('button', { name: '닫기' }).click();
  await page.getByRole('link', { name: '15%쿠폰+증정 담기 [헤라] UV프로텍터 톤업' }).click();
  await page.getByRole('button', { name: '수량올리기' }).click();
  await page.getByRole('button', { name: '장바구니 담기' }).click();
  await page.getByRole('button', { name: '상품 이미지 [헤라] UV프로텍터 톤업 50ML' }).click();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '로그인' }).click();

  const LoignTitle = await page.getByRole('heading', { name: '로그인'});
  await expect(LoignTitle).toBeVisible();
  await page.getByRole('button', { name: '닫기' }).click();
})

