import { HeroSection } from '@components/home';
import { MainLayout } from '@components/layouts';
import { NextPageWithLayout } from '@models/common';
import { Box } from '@mui/system';
import styles from '../styles/Home.module.css';

const Home: NextPageWithLayout = () => {
  return (
    <Box className={styles.container}>
      <HeroSection />
    </Box>
  );
};
Home.Layout = MainLayout;
export default Home;
