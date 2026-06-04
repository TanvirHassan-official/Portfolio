import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return {};
  return { title: `${project.title} — Tanvir Hassan`, description: project.desc };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
