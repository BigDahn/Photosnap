import Image from "next/image";
import Link from "next/link";

function Logo({ style, filter, file }) {
  return (
    <Link href="/">
      <Image src={file} alt="logo" width={0} height={0} className={style} />
    </Link>
  );
}

export default Logo;
