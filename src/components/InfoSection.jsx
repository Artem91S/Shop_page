export default function InfoSection({
  title,
  description,
  styleSection,
  styleTitle,
  styleDescription,
}) {
  return (
    <div className={styleSection}>
      <h3 className={styleTitle}>{title}</h3>
      <p className={styleDescription}>{description}</p>
    </div>
  );
}
