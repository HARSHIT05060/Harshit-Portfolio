import React, { useState, useEffect, useRef } from 'react';
import {
    Moon, Sun, Search, SlidersHorizontal, LayoutGrid, List, Sparkles,
    Wallet, ShoppingBag, FileBox, User, Calendar, BadgeCheck, CircleDot,
    Circle, ExternalLink, Github, FileText, Check, Rows, ArrowUp,
    ArrowLeft, Mail, CalendarClock, Twitter, Linkedin, X
} from 'lucide-react';
import f2f_img from '../assets/f2f_img.png';
import profile_img from '../assets/profile_img.png';
import about_img from '../assets/about_img.png';

const DetailedProject = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [query, setQuery] = useState('');
    const [currentSort, setCurrentSort] = useState('newest');
    const [isListView, setIsListView] = useState(true);
    const [sortMenuOpen, setSortMenuOpen] = useState(false);
    const [detailOpen, setDetailOpen] = useState(false);
    const [activeDetail, setActiveDetail] = useState('');
    const lastFocusedRef = useRef(null);

    const projects = [
        {
            id: 'syncwage',
            title: 'SyncWage – Ultimate Payroll Software',
            category: 'Payroll Software',
            date: '2025-08-26',
            tags: 'Payroll,Attendance,SaaS,MERN,Fintech,Compliance,React,Node,MongoDB,Express',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a6ea5042-fd78-4888-b5e1-47f268a0569b_800w.jpg',
            description: 'A complete payroll and attendance management system designed to handle bulk attendance, hourly/monthly pay, finalized pay, and automated payroll generation with compliance features. Developed as part of my internship at Shopno.',
            highlights: [
                'Bulk attendance system with weekly calendar and updates',
                'Monthly, hourly, and finalized pay modules',
                'Secure role-based access with admin/employee dashboards',
                'Automated salary calculations and reports'
            ],
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            year: '2025',
            status: 'In Progress',
            icon: Wallet,
            liveLink: 'https://syncwage.com/',
            screen1: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a6ea5042-fd78-4888-b5e1-47f268a0569b_800w.jpg',
            screen2: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a6ea5042-fd78-4888-b5e1-47f268a0569b_800w.jpg',
            gitHub: 'https://github.com/yogeshShopno/syncwage',
        },
        {
            id: 'farm2fresh',
            title: 'Farm2Fresh',
            category: 'E-commerce / Farmer-to-Consumer',
            date: '2023-11-10',
            tags: 'Ecommerce,Marketplace,MERN,React,Node,Express,MongoDB',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/54daa199-2840-486b-b428-1cf127a23f75_3840w.jpg',
            description: 'A farmer-to-consumer platform enabling direct vegetable transactions. Focused on transparency, fair pricing, and real-time inventory updates. Developed as a team project where I handled both frontend and backend.',
            highlights: [
                'Vendor & consumer portals with role-based features',
                'Real-time stock updates and product bundles',
                'Secure payments with order tracking',
                'Transparent origin and delivery slot booking'
            ],
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            year: '2023',
            status: 'Live',
            icon: ShoppingBag,
            liveLink: 'https://farm2fresh.vercel.app/',
            screen1: f2f_img,
            screen2: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3ca474e4-baf4-49df-a096-a7c02e1ebf42_3840w.jpg',
            gitHub: 'https://github.com/HARSHIT05060/Farm2Fresh',
        },
        {
            id: 'docusync',
            title: 'DocuSync',
            category: 'Document Management',
            date: '2023-10-10',
            tags: 'Documents,Collaboration,MERN,React,Node,Express,MongoDB,OCR',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d376ff16-eb18-4b8a-bfcb-f1c5a2cf1b45_3840w.jpg',
            description: 'A document management platform with OCR, version control, user permissions, and advanced search functionality. Built to handle bulk uploads and secure sharing with audit logs.',
            highlights: [
                'OCR-based text extraction and smart search',
                'Granular access control with role-based permissions',
                'Document versioning and secure sharing',
                'Bulk uploads and e-signature support'
            ],
            tech: ['React', 'Node.js', 'Express', 'MongoDB'],
            year: '2024',
            status: 'Pilot',
            icon: FileBox,
            liveLink: '#',
            screen1: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/121be919-aa4f-4b59-9800-d27f6ee33a7d_3840w.jpg',
            screen2: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d376ff16-eb18-4b8a-bfcb-f1c5a2cf1b45_3840w.jpg',
            gitHub: 'https://github.com/HARSHIT05060/',
        },
        {
            id: 'portfolio',
            title: 'Portfolio Website',
            category: 'Personal Project',
            date: '2025-05-08',
            tags: 'Portfolio,Performance,SEO,Next.js,Tailwind,SSR',
            image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5162c07d-8a65-4a42-9a8c-c48dbea36297_1600w.jpg',
            description: 'My personal portfolio website built to showcase projects, internships, and achievements. Optimized for performance, accessibility, and SEO with blog support and case studies.',
            highlights: [
                '100/100 Lighthouse performance on core pages',
                'Responsive design with dark/light themes',
                'SEO-ready with metadata, sitemap, and OpenGraph',
                'CMS-driven blog using MDX content'
            ],
            tech: ['Next.js', 'Tailwind CSS', 'MDX'],
            year: '2025',
            status: 'Live',
            icon: User,
            liveLink: 'https://harshit-kapadia.vercel.app/',
            screen1: profile_img,
            screen2: about_img,
            gitHub: 'https://github.com/HARSHIT05060/',
        }
    ];


    const categories = [
        { key: 'all', label: 'All', icon: Sparkles },
        { key: 'Payroll Software', label: 'Payroll', icon: Wallet },
        { key: 'E-commerce / Farmer-to-Consumer', label: 'E‑commerce', icon: ShoppingBag },
        { key: 'Document Management', label: 'Docs', icon: FileBox },
        { key: 'Personal Project', label: 'Personal', icon: User }
    ];

    const filteredAndSortedProjects = () => {
        let filtered = projects.filter(project => {
            const matchCategory = activeCategory === 'all' || project.category === activeCategory;
            const matchQuery = query === '' ||
                `${project.category} ${project.title} ${project.tags}`.toLowerCase().includes(query.toLowerCase());
            return matchCategory && matchQuery;
        });

        return filtered.sort((a, b) => {
            if (currentSort === 'az') {
                return a.title.localeCompare(b.title);
            }
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return currentSort === 'oldest' ? dateA - dateB : dateB - dateA;
        });
    };

    const openDetail = (id) => {
        lastFocusedRef.current = document.activeElement;
        setActiveDetail(id);
        setDetailOpen(true);
        document.documentElement.classList.add('overflow-hidden');
        document.body.classList.add('overflow-hidden');
    };

    const closeDetail = () => {
        setDetailOpen(false);
        setActiveDetail('');
        document.documentElement.classList.remove('overflow-hidden');
        document.body.classList.remove('overflow-hidden');
        if (lastFocusedRef.current) {
            lastFocusedRef.current.focus();
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                if (sortMenuOpen) setSortMenuOpen(false);
                if (detailOpen) closeDetail();
            }
        };

        const handleClickOutside = (e) => {
            if (sortMenuOpen && !e.target.closest('#sortMenu') && !e.target.closest('#sortBtn')) {
                setSortMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
        };
    }, [sortMenuOpen, detailOpen]);

    const StatusIcon = ({ status }) => {
        switch (status) {
            case 'Live': return <BadgeCheck className="w-3.5 h-3.5" />;
            case 'Pilot': return <CircleDot className="w-3.5 h-3.5" />;
            case 'In progress': return <Circle className="w-3.5 h-3.5" />;
            default: return <Circle className="w-3.5 h-3.5" />;
        }
    };

    const renderProjectCard = (project) => (
        <article
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
        >
            <div className="flex flex-col h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                    <div className="absolute left-3 right-3 bottom-3">
                        <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/10 backdrop-blur px-4 py-3">
                            <span className="text-sm font-medium text-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' }}>
                                {project.title}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-white/70" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' }}>
                                {project.category.includes('/') ? project.category.split('/')[0].trim() + ' / ' + project.category.split('/')[1].trim().substring(0, 3) : project.category}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="p-5 flex-1 flex flex-col gap-4">
                    <p className="text-sm text-white/80 leading-relaxed">
                        {project.description}
                    </p>

                    <ul className="grid grid-cols-1 gap-2 text-sm text-white/70">
                        {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-white/60 mt-0.5" />
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <span key={index} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/80">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-3 text-xs text-white/60">
                            <span className="inline-flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" /> {project.year}
                            </span>
                            <span className="inline-flex items-center gap-1">
                                <StatusIcon status={project.status} /> {project.status}
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/5 transition">
                                <ExternalLink className="w-3.5 h-3.5" />
                                {project.status === 'Live' ? 'Demo' : 'Demo'}
                            </a>
                            <a href={project.gitHub} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/80 hover:text-white hover:bg-white/5 transition">
                                <Github className="w-3.5 h-3.5" /> Code
                            </a>
                            <button
                                onClick={() => openDetail(project.id)}
                                className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white hover:bg-white/10 transition"
                            >
                                <FileText className="w-3.5 h-3.5" /> Case study
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );

    const renderDetailModal = () => {
        const project = projects.find(p => p.id === activeDetail);
        if (!project) return null;

        return (
            <div className="fixed inset-0 z-50" style={{ display: detailOpen ? 'block' : 'none' }}>
                <div onClick={closeDetail} className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

                <button
                    onClick={closeDetail}
                    className="fixed right-4 top-4 z-[60] inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-neutral-900/70 hover:bg-neutral-800/80 text-white/80 hover:text-white transition"
                >
                    <X className="w-4 h-4" />
                </button>

                <div className="relative h-full w-full overflow-y-auto">
                    <article>
                        <section
                            className="relative h-[60vh] min-h-[420px] w-full bg-neutral-900 bg-center bg-cover bg-fixed"
                            style={{ backgroundImage: `url('${project.image}')` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-neutral-950"></div>
                            <div className="absolute bottom-0 left-0 right-0">
                                <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-8">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-2.5 py-1.5 text-[11px] text-white/80 backdrop-blur">
                                        <project.icon className="w-3.5 h-3.5" />
                                        {project.category}
                                    </div>
                                    <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-semibold">{project.title}</h2>
                                    <p className="mt-2 max-w-2xl text-sm text-white/80">{project.description}</p>
                                </div>
                            </div>
                        </section>

                        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2">
                                    <div className="prose prose-invert max-w-none">
                                        <h3 className="text-lg font-semibold tracking-tight mb-3">Overview</h3>
                                        <p className="text-sm text-white/80">{project.description}</p>
                                    </div>

                                    <div className="mt-8">
                                        <h4 className="text-sm font-medium tracking-tight text-white/90">Highlights</h4>
                                        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/80">
                                            {project.highlights.map((highlight, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <Check className="w-4 h-4 mt-0.5 text-white/60" />
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-10">
                                        <h4 className="text-sm font-medium tracking-tight text-white/90">Screens</h4>
                                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
                                                <img src={project.screen1} alt="Screen 1" className="w-full h-60 object-contain transition duration-700 group-hover:scale-105" />
                                            </div>
                                            <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
                                                <img src={project.screen2} alt="Screen 2" className="w-full h-60 object-contain transition duration-700 group-hover:scale-105" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <aside className="lg:col-span-1">
                                    <div className="sticky top-20 space-y-6">
                                        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                                            <h4 className="text-sm font-medium tracking-tight text-white/90">Tech</h4>
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {project.tech.map((tech, index) => (
                                                    <span key={index} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px]">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/70">
                                                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                                    <div className="text-white/50">Year</div>
                                                    <div className="mt-1 text-white">{project.year}</div>
                                                </div>
                                                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                                                    <div className="text-white/50">Status</div>
                                                    <div className="mt-1 text-white">{project.status}</div>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex items-center gap-2">
                                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10 transition">
                                                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                                                </a>
                                                <a href={project.gitHub} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/80 hover:text-white hover:bg-white/5 transition">
                                                    <Github className="w-3.5 h-3.5" /> Code
                                                </a>
                                            </div>
                                        </div>
                                        <button
                                            onClick={closeDetail}
                                            className="w-full inline-flex items-center justify-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 transition"
                                        >
                                            <ArrowLeft className="w-4 h-4" /> Back to projects
                                        </button>
                                    </div>
                                </aside>
                            </div>
                        </section>
                    </article>
                </div>
            </div>
        );
    };

    return (
        <div className={`antialiased selection:bg-white/10 selection:text-white`}>
            <main id="all-work" className="pt-30 pb-8">
                <section className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-white/50" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' }}>Selected Work</p>
                            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white font-semibold" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' }}>All Projects</h1>
                            <p className="mt-2 text-sm text-white/70 max-w-2xl" style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' }}>
                                Case studies and product builds across SaaS, e‑commerce, and internal tools. Use filters to explore by category or stack.
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setIsListView(false)}
                                className={`inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-2 text-xs text-white transition ${!isListView ? 'bg-white/5 hover:bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                                aria-pressed={!isListView}
                            >
                                <LayoutGrid className="w-3.5 h-3.5" />
                                Grid
                            </button>
                            <button
                                onClick={() => setIsListView(true)}
                                className={`inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-2 text-xs transition ${isListView ? 'bg-white/5 text-white hover:bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                            >
                                <List className="w-3.5 h-3.5" />
                                List
                            </button>
                        </div>
                    </div>

                    <div id="filters" className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="col-span-2 flex flex-wrap items-center gap-2">
                            {categories.map((category) => {
                                const Icon = category.icon;
                                return (
                                    <button
                                        key={category.key}
                                        onClick={() => setActiveCategory(category.key)}
                                        className={`inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs transition ${activeCategory === category.key
                                            ? 'bg-white/5 text-white hover:bg-white/10'
                                            : 'bg-transparent text-white/80 hover:text-white hover:bg-white/5'
                                            }`}
                                        aria-selected={activeCategory === category.key}
                                    >
                                        <Icon className="w-3.5 h-3.5" />
                                        {category.label}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="col-span-1 flex items-center gap-2">
                            <div className="relative flex-1">
                                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                                <input
                                    id="searchInput"
                                    type="text"
                                    placeholder="Search projects, tags, stack..."
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full rounded-md bg-white/5 border border-white/10 pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/10 focus:border-white/20 transition"
                                    style={{ fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji' }}
                                />
                            </div>

                            <div className="relative">
                                <button
                                    id="sortBtn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSortMenuOpen(!sortMenuOpen);
                                    }}
                                    className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-white hover:bg-white/10 transition"
                                >
                                    <SlidersHorizontal className="w-3.5 h-3.5" />
                                    Sort
                                </button>

                                {sortMenuOpen && (
                                    <div id="sortMenu" className="absolute right-0 mt-2 w-40 rounded-md border border-white/10 bg-neutral-950/95 backdrop-blur p-1 shadow-lg">
                                        <button
                                            onClick={() => {
                                                setCurrentSort('newest');
                                                setSortMenuOpen(false);
                                            }}
                                            className="w-full text-left px-3 py-2 text-xs rounded-md hover:bg-white/5"
                                        >
                                            Newest
                                        </button>
                                        <button
                                            onClick={() => {
                                                setCurrentSort('oldest');
                                                setSortMenuOpen(false);
                                            }}
                                            className="w-full text-left px-3 py-2 text-xs rounded-md hover:bg-white/5"
                                        >
                                            Oldest
                                        </button>
                                        <button
                                            onClick={() => {
                                                setCurrentSort('az');
                                                setSortMenuOpen(false);
                                            }}
                                            className="w-full text-left px-3 py-2 text-xs rounded-md hover:bg-white/5"
                                        >
                                            A → Z
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className={`mt-8 grid gap-6 ${isListView ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                        {filteredAndSortedProjects().map(renderProjectCard)}
                    </div>

                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                        <p className="text-xs text-white/50">3–5 minute reads per case study</p>
                        <div className="flex items-center gap-3">
                            <a href="#top" className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs text-white/80 hover:text-white hover:bg-white/5 transition">
                                <ArrowUp className="w-3.5 h-3.5" /> Back to top
                            </a>
                            <a href="/#projects" className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white hover:bg-white/10 transition">
                                <ArrowLeft className="w-3.5 h-3.5" /> Back to featured
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {renderDetailModal()}
        </div>
    );
};

export default DetailedProject;