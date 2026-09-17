export const isRealProduction =
  process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

export const metadataBase = isRealProduction
  ? new URL(process.env.NEXT_PUBLIC_METADATA_BASE || 'https://enai.co.jp/')
  : null;

export const siteName = '住宅型有料老人ホーム 梨園';
export const siteTitle = '住宅型有料老人ホーム 梨園';
export const siteDescription =
  '住宅型の有料老人ホーム「梨園」は、熊本県荒尾市にある介護施設・有料老人ホームです。梨園は、住宅型の老人ホームであるため居住空間は快適で、一人の生活者として尊重・尊厳をもって寄り添っていきたいと考えております。なお介護職・介護スタッフも募集中です。';
