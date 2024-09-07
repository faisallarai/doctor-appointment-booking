import Hero from '@/components/Hero';
import PhysicianListView from '@/components/PhysicianListView';
import SearchDoctor from '@/components/SearchDoctor';
import { getCategories } from '@/lib/actions/category.actions';
import { getPhysicians } from '@/lib/actions/physician.actions';
import { CategoryData, PhysicianData } from '@/types/data';

export default function Home() {
  const categories: CategoryData[] = getCategories();
  const physicians: PhysicianData[] = getPhysicians();

  return (
    <main className="">
      <Hero />
      <SearchDoctor categories={categories} />
      <PhysicianListView physicians={physicians} heading="Popular Doctors" />
    </main>
  );
}
