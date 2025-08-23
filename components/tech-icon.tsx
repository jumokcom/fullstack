import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiSupabase, 
  SiVercel,
  SiGithub,
  SiReact,
  SiRadixui,
  SiNodedotjs,
  SiPostgresql,
  SiVisualstudiocode,
  SiOpenai
} from 'react-icons/si';
import { cn } from '@/lib/utils';

const techIcons = {
  nextjs: { icon: SiNextdotjs, color: 'text-black' },
  typescript: { icon: SiTypescript, color: 'text-blue-600' },
  tailwind: { icon: SiTailwindcss, color: 'text-cyan-500' },
  supabase: { icon: SiSupabase, color: 'text-green-600' },
  vercel: { icon: SiVercel, color: 'text-black' },
  github: { icon: SiGithub, color: 'text-gray-900' },
  react: { icon: SiReact, color: 'text-blue-500' },
  radix: { icon: SiRadixui, color: 'text-purple-600' },
  nodejs: { icon: SiNodedotjs, color: 'text-green-500' },
  postgresql: { icon: SiPostgresql, color: 'text-blue-700' },
  vscode: { icon: SiVisualstudiocode, color: 'text-blue-600' },
  claude: { icon: SiOpenai, color: 'text-green-600' },
} as const;

export type TechName = keyof typeof techIcons;

interface TechIconProps {
  name: TechName;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showColor?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5', 
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

export function TechIcon({ name, size = 'md', className, showColor = true }: TechIconProps) {
  const { icon: IconComponent, color } = techIcons[name];
  
  return (
    <IconComponent 
      className={cn(
        sizeClasses[size],
        showColor ? color : '',
        className
      )}
    />
  );
}

// 기술 정보를 함께 반환하는 유틸리티 함수
export function getTechInfo(name: TechName) {
  const techInfo = {
    nextjs: { displayName: 'Next.js', category: 'Framework' },
    typescript: { displayName: 'TypeScript', category: 'Language' },
    tailwind: { displayName: 'Tailwind CSS', category: 'Styling' },
    supabase: { displayName: 'Supabase', category: 'Backend' },
    vercel: { displayName: 'Vercel', category: 'Deploy' },
    github: { displayName: 'GitHub', category: 'DevOps' },
    react: { displayName: 'React', category: 'Library' },
    radix: { displayName: 'Radix UI', category: 'Components' },
    nodejs: { displayName: 'Node.js', category: 'Runtime' },
    postgresql: { displayName: 'PostgreSQL', category: 'Database' },
    vscode: { displayName: 'VS Code', category: 'Editor' },
    claude: { displayName: 'Claude AI', category: 'AI' },
  } as const;
  
  return techInfo[name];
}

// 모든 기술 목록 반환
export function getAllTechNames(): TechName[] {
  return Object.keys(techIcons) as TechName[];
}