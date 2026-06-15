export const projects = [
  {
    id: 1,
    title: 'AWS Security Monitoring System',
    description: 'A cloud security monitoring solution using AWS CloudTrail, CloudWatch, and SNS to detect and alert on suspicious activity in real time. Tracks API calls, monitors resource changes, and sends instant notifications on policy violations.',
    preview: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80',
    category: ['Cloud' ,'Cybersecurity'],
    tags: ['AWS', 'CloudTrail', 'CloudWatch', 'SNS', 'IAM'],
    github: 'https://github.com/Quiet-Ascension/aws-security-monitoring-system',
    demo: null,
  },
  {
    id: 2,
    title: 'Firewall Configuration using UFW',
    description: 'Configured and hardened a Linux firewall using UFW with custom rules for port management, traffic filtering, and intrusion prevention. Includes detailed documentation of rule sets and security policies.',
    preview: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    category: 'Cybersecurity',
    tags: ['UFW', 'Linux', 'Networking', 'Security'],
    github: 'https://github.com/Quiet-Ascension',
    demo: null,
  },
  {
    id: 3,
    title: 'Web Application Security Testing Lab',
    description: 'A personal lab environment for practicing web application penetration testing using OWASP methodology. Includes vulnerability scanning, traffic analysis with Wireshark, and detailed security reports.',
    preview: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80',
    category: 'Cybersecurity',
    tags: ['Burp Suite', 'OWASP', 'Nmap', 'Wireshark'],
    github: 'https://github.com/Quiet-Ascension',
    demo: null,
  },
  {
    id: 4,
    title: 'Question Paper Generator',
    description: 'A full stack web application that generates customized question papers for educators. Features AI-based question selection, category filtering, difficulty levels, and PDF export.',
    preview: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/Quiet-Ascension/Question_Paper_Generater',
    demo: null,
  }
]

export const categories = ['All', 'AI', 'Cybersecurity', 'Cloud', 'Full Stack']