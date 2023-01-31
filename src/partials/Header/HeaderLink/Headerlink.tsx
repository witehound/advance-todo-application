type HeaderlinkProps = {
  url: string;
  text: string;
};

const Headerlink = ({ text, url }: HeaderlinkProps) => {
  return <a href={url}>{text}</a>;
};

export default Headerlink;
