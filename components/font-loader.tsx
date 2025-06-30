export default function FontLoader({
  fontName,
  fontUrl,
}: {
  fontName: string;
  fontUrl: string;
}) {
  if (!fontName || !fontUrl) {
    return null;
  }

  const fontFaceRule = `
    @font-face {
      font-family: '${fontName}';
      src: url('${fontUrl}');
      font-display: swap;
    }
    .font-${fontName} {
      font-family: '${fontName}';
    }
  `;

  return (
    <>
      <link
        rel="preload"
        href={fontUrl}
        as="font"
        crossOrigin="anonymous"
      />
      <style>{fontFaceRule}</style>
    </>
  );
}
