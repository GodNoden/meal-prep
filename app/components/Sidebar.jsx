import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea } from "@/registry/new-york/ui/scroll-area"
import { MdOutlineRestaurantMenu, MdFavorite, MdLocalGroceryStore } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { BsPersonLinesFill } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { MdAnalytics } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";


import { Playlist } from "../data/playlists"

export function Sidebar(className, playlists) {
    return (
        <div className={cn("pb-12", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Colecciones
                    </h2>
                    <div className="space-y-1">
                        <Button variant="secondary" className="w-full justify-start">
                            <MdOutlineRestaurantMenu />
                            Comidas de Hoy
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <FiBookOpen />
                            Recetas
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <MdFavorite />
                            Favoritas
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <BsPersonLinesFill />
                            Menu semanal para ti
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <GoGoal />
                            Metas
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <MdAnalytics />
                            Analíticas
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <FaCalendarAlt />
                            Calendario
                        </Button>
                        <Button variant="ghost" className="w-full justify-start">
                            <MdLocalGroceryStore />
                            Lista de Compras
                        </Button>
                    </div>
                </div>
                {/* <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Library
                    </h2>
                    <div className="space-y-1">
                        <Button variant="ghost" className="w-full justify-start">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 h-4 w-4"
                            >
                                <path d="m16 6 4 14" />
                                <path d="M12 6v14" />
                                <path d="M8 8v12" />
                                <path d="M4 4v16" />
                            </svg>
                            Albums
                        </Button>
                    </div>
                </div> */}
                {/* <div className="py-2">
                    <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                        Playlists
                    </h2>
                    <ScrollArea className="h-[300px] px-1">
                        <div className="space-y-1 p-2">
                            {playlists?.map((playlist, i) => (
                                <Button
                                    key={`${playlist}-${i}`}
                                    variant="ghost"
                                    className="w-full justify-start font-normal"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="mr-2 h-4 w-4"
                                    >
                                        <path d="M21 15V6" />
                                        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                        <path d="M12 12H3" />
                                        <path d="M16 6H3" />
                                        <path d="M12 18H3" />
                                    </svg>
                                    {playlist}
                                </Button>
                            ))}
                        </div>
                    </ScrollArea>
                </div> */}
            </div>
        </div>
    )
}