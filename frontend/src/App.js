import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import JobList from './components/JobList';
import PostJobForm from './components/PostJobForm';
import Footer from './components/Footer';

const API_URL = 'http://localhost:5000/jobs';

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleJobAdded = (newJob) => {
    setJobs((prev) => [...prev, newJob]);
    document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePostJobClick = () => {
    document.getElementById('post-job')?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory =
      selectedCategory === 'All' || job.category === selectedCategory;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      job.title.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header onPostJobClick={handlePostJobClick} />
      <Hero search={search} setSearch={setSearch} />
      <main className="flex-1">
        <JobList
          jobs={filteredJobs}
          loading={loading}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <PostJobForm onJobAdded={handleJobAdded} />
      </main>
      <Footer />
    </div>
  );
}