import { Activity, Brain, Dumbbell, ShieldPlus, Baby, HeartPulse, PersonStanding, Syringe } from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    slug: 'orthopedic-physiotherapy',
    title: 'Orthopedic Physiotherapy',
    shortDescription: 'Back Pain, Neck Pain, Knee Pain, Shoulder Pain, Arthritis',
    longDescription: 'Orthopedic physiotherapy focuses on the treatment of conditions affecting the musculoskeletal system. Our expert therapists use manual therapy, exercise, and modalities to reduce pain, improve mobility, and restore function.',
    treatments: ['Back & Neck Pain', 'Knee & Joint Pain', 'Shoulder Impingement', 'Arthritis Management', 'Sciatica Relief'],
    icon: PersonStanding,
    color: 'bg-blue-100 text-blue-600',
    hoverColor: 'group-hover:bg-blue-600 group-hover:text-white',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    slug: 'neurological-rehabilitation',
    title: 'Neurological Rehabilitation',
    shortDescription: 'Stroke Rehab, Paralysis Rehab, Parkinson\'s, Balance Training',
    longDescription: 'Neurological rehabilitation is designed to help individuals who have suffered from nervous system injuries or diseases. Our goal is to improve motor control, balance, and daily functioning.',
    treatments: ['Stroke Rehabilitation', 'Paralysis Care', 'Parkinson\'s Disease Management', 'Multiple Sclerosis Therapy', 'Balance & Gait Training'],
    icon: Brain,
    color: 'bg-purple-100 text-purple-600',
    hoverColor: 'group-hover:bg-purple-600 group-hover:text-white',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    slug: 'sports-physiotherapy',
    title: 'Sports Physiotherapy',
    shortDescription: 'Sports Injury, ACL Rehab, Ankle Sprain, Muscle Injury',
    longDescription: 'Sports physiotherapy specializes in the prevention and management of injuries resulting from sports and exercise at all ages and levels of ability. We aim for a safe and rapid return to your sport.',
    treatments: ['ACL Reconstruction Rehab', 'Ankle Sprains', 'Muscle Tears & Strains', 'Tennis/Golfer\'s Elbow', 'Performance Enhancement'],
    icon: Dumbbell,
    color: 'bg-orange-100 text-orange-600',
    hoverColor: 'group-hover:bg-orange-500 group-hover:text-white',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    slug: 'post-surgical-rehabilitation',
    title: 'Post Surgical Rehabilitation',
    shortDescription: 'Knee Replacement, Hip Replacement, Spine Surgery Rehab',
    longDescription: 'Post-surgical rehabilitation is critical for a full recovery following orthopedic surgery. Our structured protocols help you regain strength, flexibility, and function safely.',
    treatments: ['Total Knee Replacement (TKR)', 'Total Hip Replacement (THR)', 'Spinal Surgery Recovery', 'Rotator Cuff Repair', 'Fracture Healing'],
    icon: ShieldPlus,
    color: 'bg-teal-100 text-teal-600',
    hoverColor: 'group-hover:bg-teal-600 group-hover:text-white',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 5,
    slug: 'pediatric-physiotherapy',
    title: 'Pediatric Physiotherapy',
    shortDescription: 'Developmental Delay, Cerebral Palsy, Muscle Weakness',
    longDescription: 'Pediatric physiotherapy helps children achieve their optimal physical development. We treat conditions that affect babies, children, and adolescents in a fun, engaging, and safe environment.',
    treatments: ['Developmental Delays', 'Cerebral Palsy', 'Muscular Dystrophy', 'Torticollis', 'Coordination Disorders'],
    icon: Baby,
    color: 'bg-pink-100 text-pink-600',
    hoverColor: 'group-hover:bg-pink-600 group-hover:text-white',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 6,
    slug: 'geriatric-physiotherapy',
    title: 'Geriatric Physiotherapy',
    shortDescription: 'Elderly Care, Fall Prevention, Mobility Training',
    longDescription: 'Geriatric physiotherapy focuses on the unique needs of older adults. We aim to maintain and improve mobility, prevent falls, and manage age-related conditions to ensure a high quality of life.',
    treatments: ['Fall Prevention Programs', 'Osteoporosis Management', 'Joint Mobility Maintenance', 'Strength & Conditioning', 'Post-Hospitalization Care'],
    icon: Activity,
    color: 'bg-indigo-100 text-indigo-600',
    hoverColor: 'group-hover:bg-indigo-600 group-hover:text-white',
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5eb3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 7,
    slug: 'womens-health',
    title: 'Women\'s Health',
    shortDescription: 'Post Pregnancy, Back Pain, Pelvic Floor Rehab',
    longDescription: 'Women\'s health physiotherapy addresses conditions specific to the female body. We provide sensitive and effective treatments for pelvic floor dysfunction, pregnancy-related issues, and more.',
    treatments: ['Postnatal Rehabilitation', 'Pelvic Floor Strengthening', 'Pregnancy Back Pain', 'Diastasis Recti Recovery', 'Incontinence Management'],
    icon: HeartPulse,
    color: 'bg-rose-100 text-rose-600',
    hoverColor: 'group-hover:bg-rose-600 group-hover:text-white',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 8,
    slug: 'other-therapies',
    title: 'Other Therapies',
    shortDescription: 'Dry Needling, Electrotherapy, Exercise Therapy',
    longDescription: 'We offer a wide range of supplementary therapies that complement traditional physiotherapy. These advanced techniques help accelerate healing and manage stubborn pain.',
    treatments: ['Dry Needling', 'Electrotherapy (TENS, IFT)', 'Ultrasound Therapy', 'Cupping Therapy', 'Kinesio Taping'],
    icon: Syringe,
    color: 'bg-gray-100 text-gray-600',
    hoverColor: 'group-hover:bg-gray-600 group-hover:text-white',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80'
  }
];
