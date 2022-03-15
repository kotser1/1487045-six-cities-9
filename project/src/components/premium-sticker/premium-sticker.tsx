type PremiumStickerProps = {
  className?: string;
};

function PremiumSticker({className}: PremiumStickerProps): JSX.Element {
  return (
    <div className={className}>
      <span>Premium</span>
    </div>
  );
}

export default PremiumSticker;
