import FontLoader from "@/components/font-loader";

export default async function Home() {
  const fontName = "MyFont";

  return (
    <>
      <div
        className={`font-${fontName} flex gap-4 items-center h-screen justify-center text-5xl`}
      >
        Home
      </div>
      <FontLoader
        fontName={fontName}
        fontUrl={await getUserFontULR()}
      />
    </>
  );
}

// #region rest of the file
async function getUserFontULR() {
  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );
  return "https://res.cloudinary.com/dulgvdcw5/raw/upload/v1751037245/ManufacturingConsent-Regular_zn8kl9.ttf";
}
// #endregion
