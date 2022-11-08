import { Image, Link } from '@chakra-ui/react';
import Logos from '/src/assets/logo.png';

function Logo() {
  return (
    <Link href="/" w={{ base: 10, md: 14 }}>
      <Image src={Logos} />
    </Link>
  );
}

export default Logo;
