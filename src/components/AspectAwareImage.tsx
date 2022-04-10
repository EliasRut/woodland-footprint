interface AspectAwareImageProps {
  className?: string;
  imageSrcName: string;
  imageAlt: string;
  imageTitle: string;
  width: number;
  height: number;
  lazy?: boolean;
}

export const AspectAwareImage = (props: AspectAwareImageProps) => (
  <img
    className={props.className || ""}
    src={props.imageSrcName}
    alt={props.imageAlt}
    title={props.imageTitle}
    style={{
      width: `${props.width}px`,
      aspectRatio: `${props.width / props.height}`,
    }}
    loading={props.lazy ? "lazy" : "eager"}
  />
);
