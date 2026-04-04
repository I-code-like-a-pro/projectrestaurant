"use client"
export const dynamic = 'force-dynamic'
import Image from "next/image"
import { motion } from "motion/react"
import Link from "next/link"
import { ChefHat, Award, MapPin, Clock, MailOpen } from "lucide-react"
import { Description } from "@radix-ui/themes/dist/cjs/components/alert-dialog"
export default function HomePage() {

    const features = [
        {
            icon: <Award className="w-6 h-6" />,
            title: "Michellin Recommended",
            description: "Recognized for our exceptional culinary excellence"
        },
        {
            icon: <ChefHat className="w-6 h-6" />,
            title: "Led by master Chef",
            description: "Led by Chef Jean-Pierre, 25 years experience"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Fresh Daily",
            description: "Ingredients sourced from local markets daily"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Prime Location",
            description: "Heart of Manhattan's culinary district"
        }
    ]

    const highlights = [
        {
            dish: "https://images.unsplash.com/photo-1770005639914-e57bd01d86d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwc3RlYWslMjBkaXNoJTIwcGxhdGVkfGVufDF8fHx8MTc3NDYwNTkzMXww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Wagyu Beef",
            category: "Signature"
        },
        {
            dish: "https://images.unsplash.com/photo-1750943024048-a4c9912b1425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHN1c2hpJTIwcGxhdHRlciUyMGVsZWdhbnR8ZW58MXx8fHwxNzc0NjY2MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Fresh Sushi",
            category: "Japanese"
        },
        {
            dish: "https://images.unsplash.com/photo-1753722157947-8a50f04a9309?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBkZXNzZXJ0JTIwZmluZSUyMGRpbmluZ3xlbnwxfHx8fDE3NzQ1NjE2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Chocolate Soufflé",
            category: "Desserts"
        }
    ]
    return (
        <div>
            <div>
                <div className="relative h-screen">
                    <Image
                        src="https://images.unsplash.com/photo-1769773297747-bd00e31b33aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGludGVyaW9yJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzQ2NjYzMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="Restaurant interior"
                        fill
                        className="object-cover object-top object-bottom"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/70 to-dark-bg/95" />

                    <div className="relative z-10 text-center px-4 max-w-4xl flex flex-col items-center justify-center w-full h-full mx-auto my-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}

                            className="flex flex-col items-center justify-center"
                        >

                            <div className="tracking-[0.3em] text-amber-400 text-sm mb-4 uppercase">
                                Since 1995
                            </div>
                            <h1 className="font-serif mb-6 text-transparent text-5xl bg-gradient-to-b from-text-primary to-text-secondary bg-clip-text">
                                Maison Étoile
                            </h1>
                            <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                                Where culinary artistry meets timeless elegance
                            </p>

                            <div className="flex items-center justify-center gap-6">

                                <Link href="/reservation">
                                    <button className="bg-gold hover:bg-gold-dark px-4 py-2
                                     rounded-md text-sm cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-108">
                                        Reserve a Table
                                    </button>
                                </Link>

                                <Link href="/menu">
                                    <button className="bg-black text-white rounded-md
                                     px-4 py-2 text-sm hover:bg-gray cursor-pointer scale transform transition-transform duration-300 ease-in-out hover:scale-108">
                                        View Menu
                                    </button>

                                </Link>
                            </div>
                        </motion.div>
                        <motion.div className="absolute bottom-30 left-1/2 transform-translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                            <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center p-1">
                                <div className="w-1.5 h-3 bg-amber-400 rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-amber-400/50 transition-colors"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg mb-2">{feature.title}</h3>
                            <p className="text-sm text-neutral-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="tracking-[0.3em] text-gold text-center mb-4">
                    Culinary Execellence
                </div>
                <div className="text-center font-serif text-4xl mb-4">
                    Signature Creations
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: .5, delay:index*0.1}}
                                className="rounded-2xl overflow-hidden"

                            >
                                <div>
                                    <div className="relative overflow-hidden rounded-2xl aspect-[4/5] group">
                                        <Image
                                            src={highlight.dish}
                                            alt={highlight.title}
                                            fill
                                            className="object-cover object-top object-bottom transition-transform duration-700 group-hover:scale-110"
                                            priority

                                        />
                                         <div className="absolute inset-0 bg-gradient-to-br from-dark-bg/50 to-dark-bg/70" />

                                        <div className="absolute bottom-0 text-center flex flex-col justify-center mb-2 mx-5 my-5 uppercase">
                                            <div className="text-gold tracking-[0.3em] text-xs">
                                            {highlight.title}
                                        </div>
                                        <div className="text-2xl font-serif">
                                            {highlight.category}
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        ))
                    }
                </div>

               <div className="flex justify-center items-center  my-6 ">
                 <button className="border-2 rounded-md p-2 border-amber-400 text-amber-400 bg-cream text-gold hover:bg-amber-400 hover:text-neutral-950">
                    Explore all dishes
                </button>
               </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-amber-400/10 to-amber-600/10 border border-amber-400/20 rounded-3xl p-12">
                    <h2 className="font-serif text-5xl mb-2 ">
                        Reserve your Experience
                    </h2>

                    <p className="text-neutral-400 mb-4">Join us for an unforgettable evening of exceptional cuisine and impeccable service </p>

                    <button className="text-primary-foreground rounded-md py-2 bg-amber-500 hover:bg-amber-600 text-neutral-950 px-12">
                        Make a Reservation
                    </button>
                </div>
            </section>




        </div>
    )
}