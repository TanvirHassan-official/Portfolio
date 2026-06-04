'use client';
import Galaxy from './Galaxy';

export default function GalaxyBackground() {
  return (



    
    <div className="fixed inset-0 z-0">
      <Galaxy
        color={[0.118, 0.212, 0.247]}
          mouseReact
          amplitude={0.1}
          speed={1}
      />
    </div>
  );
}