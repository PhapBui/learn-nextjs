import { HeroSection, RecentPosts } from '@components/home';
import { FeatureWork } from '@components/home/featuredWorks';
import { MainLayout } from '@components/layouts';
import { NextPageWithLayout } from '@models/common';
import { Box } from '@mui/system';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPosts />
      <FeatureWork />
    </Box>
  );
};
Home.Layout = MainLayout;
export default Home;
