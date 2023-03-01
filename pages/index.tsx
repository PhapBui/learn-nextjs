import { HeroSection, RecentPosts } from '@components/home';
import { MainLayout } from '@components/layouts';
import { NextPageWithLayout } from '@models/common';
import { Box } from '@mui/system';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  );
};
Home.Layout = MainLayout;
export default Home;
