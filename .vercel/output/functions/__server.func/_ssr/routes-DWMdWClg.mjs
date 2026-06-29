import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DWMdWClg.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-Cg9cXR3Z.jpg";
var interior_default = "/assets/interior-BFyv9IyN.jpg";
var construction_default = "/assets/construction-P2fEidZF.jpg";
var bricks_default = "/assets/bricks-CzCkN2na.jpg";
var tig_default = "/assets/tig-DukoxfP2.png";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divisions, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Philosophy, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center gap-3 group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: tig_default,
						alt: "Tostyam Infa Logo",
						className: "w-18 h-18 object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-9 text-sm",
					children: [
						{
							label: "Interiors",
							href: "#interiors"
						},
						{
							label: "Construction",
							href: "#construction"
						},
						{
							label: "Bricks",
							href: "#bricks"
						},
						{
							label: "Projects",
							href: "#projects"
						},
						{
							label: "Contact",
							href: "#contact"
						}
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-muted-foreground hover:text-foreground transition-colors",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "text-sm border border-foreground/80 px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors",
					children: "Start a project"
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "relative pt-32 pb-24 lg:pt-44 lg:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-10 lg:gap-14 items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-px bg-accent" }), "Est. 2026 — Three disciplines, one studio"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-serif text-5xl sm:text-6xl lg:text-[6.5rem] leading-[0.95] tracking-tight",
							children: [
								"Spaces, structures",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"and the ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "text-accent",
									children: "material"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"between them."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed",
							children: "TIG is an integrated design and build group. We compose interiors, raise the buildings that hold them, and manufacture the bricks they are built from."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: "bg-foreground text-background px-6 py-3 rounded-full text-sm hover:bg-accent transition-colors",
								children: "Explore our work"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#divisions",
								className: "text-sm flex items-center gap-2 group",
								children: ["Our three divisions", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "transition-transform group-hover:translate-x-1",
									children: "→"
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[4/5] overflow-hidden rounded-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_default,
							alt: "Architectural facade detail",
							className: "w-full h-full object-cover",
							width: 1024,
							height: 1280
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-3 gap-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: "120+",
								l: "Projects delivered"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: "27 yr",
								l: "In practice"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: "3",
								l: "Disciplines"
							})
						]
					})]
				})]
			})
		})
	});
}
function Stat({ n, l }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-serif text-2xl",
		children: n
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-muted-foreground text-xs uppercase tracking-wider mt-1",
		children: l
	})] });
}
var DIVISIONS = [
	{
		id: "interiors",
		no: "01",
		title: "Interior Design",
		tag: "Residential · Hospitality · Workplace",
		body: "Interiors composed for how you actually live and work. From a single room to a full programme, our studio shapes light, material and proportion into spaces that feel inevitable.",
		points: [
			"Concept & spatial planning",
			"FF&E and custom joinery",
			"Lighting design",
			"Site supervision"
		],
		img: interior_default
	},
	{
		id: "construction",
		no: "02",
		title: "Construction",
		tag: "Residential · Commercial · Turnkey",
		body: "A construction practice built on engineering discipline and craftsmanship. We deliver projects of every scale on programme and on budget, with a quality bar set by our own design teams.",
		points: [
			"Turnkey contracting",
			"Project & cost management",
			"Structural & MEP coordination",
			"Renovation & retrofit"
		],
		img: construction_default
	},
	{
		id: "bricks",
		no: "03",
		title: "Bricks",
		tag: "Manufacturing · Supply · Trade",
		body: "Our own kilns produce premium fired clay bricks for builders, contractors and architects. Honest material, consistent batches, delivered at scale.",
		points: [
			"Solid & perforated clay bricks",
			"Custom batch firing",
			"Pallet & bulk supply",
			"Architect specification"
		],
		img: bricks_default
	}
];
function Divisions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "divisions",
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-8 mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4",
					children: "— Three divisions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-4xl lg:text-6xl max-w-2xl leading-[1.02]",
					children: "One group. Three crafts, working in concert."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hidden lg:block max-w-sm text-muted-foreground",
					children: "Independent specialists under a single roof — so a project can move from drawing, to site, to material without ever leaving the family."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-px bg-border",
				children: DIVISIONS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Division, {
					d,
					reverse: i % 2 === 1
				}, d.id))
			})]
		})
	});
}
function Division({ d, reverse }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		id: d.id,
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `grid lg:grid-cols-2 gap-10 lg:gap-16 py-16 lg:py-24 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[5/4] overflow-hidden rounded-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: d.img,
						alt: d.title,
						loading: "lazy",
						width: 1024,
						height: 820,
						className: "w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-4 text-muted-foreground text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-3xl text-foreground",
							children: d.no
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "uppercase tracking-[0.18em] text-xs",
							children: d.tag
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-serif text-4xl lg:text-5xl mt-5",
						children: d.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground leading-relaxed max-w-md",
						children: d.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid grid-cols-2 gap-x-6 gap-y-3 max-w-md text-sm",
						children: d.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent mt-1.5",
								children: "◆"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#contact",
						className: "mt-10 inline-flex items-center gap-2 text-sm border-b border-foreground pb-1 self-start hover:gap-3 transition-all",
						children: [
							"Enquire about ",
							d.title.toLowerCase(),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })
						]
					})
				]
			})]
		})
	});
}
function Philosophy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6",
					children: "— Our philosophy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] tracking-tight",
					children: "\"A building is only as honest as the brick it's made of, and a room only as considered as the hands that shaped it. We build the whole chain, so nothing is left to chance.\""
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 text-sm text-muted-foreground",
					children: "— Founder & Principal Architect"
				})
			]
		})
	});
}
var PROJECTS = [
	{
		t: "Verdant House",
		c: "Private residence · Interiors + Build",
		y: "2024"
	},
	{
		t: "Atrium 14",
		c: "Commercial tower · Construction",
		y: "2023"
	},
	{
		t: "Kiln Series No. 7",
		c: "Brickworks · Manufacturing",
		y: "2024"
	},
	{
		t: "The Olive Hotel",
		c: "Hospitality · Interiors",
		y: "2023"
	}
];
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4",
					children: "— Selected work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-serif text-4xl lg:text-5xl",
					children: "Recent projects"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "hidden sm:inline text-sm text-muted-foreground hover:text-foreground",
					children: "View archive →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "border-t border-border",
				children: PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-border group",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "grid grid-cols-12 gap-4 py-6 lg:py-8 items-center hover:px-4 transition-all duration-300",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-1 text-xs text-muted-foreground",
								children: p.y
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-7 sm:col-span-6 font-serif text-2xl lg:text-3xl",
								children: p.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-3 sm:col-span-4 text-sm text-muted-foreground hidden sm:block",
								children: p.c
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "col-span-1 text-right text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-transform",
								children: "→"
							})
						]
					})
				}, p.t))
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-border bg-foreground text-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36 grid lg:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.2em] text-background/60 mb-6",
						children: "— Let's build"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif text-5xl lg:text-7xl leading-[0.98]",
						children: [
							"Tell us about",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"your project."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-md text-background/70 leading-relaxed",
						children: "Whether it's a single room, an entire building, or a pallet of bricks — start the conversation. We respond within two working days."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5 space-y-8 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
						label: "General",
						v: "hello@tig.group"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
						label: "Interiors",
						v: "interiors@tig.group"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
						label: "Construction",
						v: "build@tig.group"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
						label: "Bricks (trade)",
						v: "trade@tig.group"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
						label: "Studio",
						v: "Bhubaneswar, Odisha"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
						label: "Phone",
						v: "+91 80 4000 0000"
					})
				]
			})]
		})
	});
}
function ContactRow({ label, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-3 gap-4 pb-4 border-b border-background/15",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-background/50 uppercase tracking-wider text-xs",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "col-span-2",
			children: v
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-foreground text-background/60 border-t border-background/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 lg:px-10 py-8 flex flex-wrap items-center justify-between gap-4 text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Toatyam infra group. All rights reserved."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-background",
						children: "Instagram"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-background",
						children: "LinkedIn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-background",
						children: "Press"
					})
				]
			})]
		})
	});
}
//#endregion
export { Index as component };
