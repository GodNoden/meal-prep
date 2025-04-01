import Image from "next/image";
import { PlusCircle } from "lucide-react";
import dynamic from "next/dynamic";
import CircularProgress from "./CircularProgress";
import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/new-york/ui/context-menu";
import { playlists } from "../data/playlists";

export function AlbumArtwork({
  recipe,
  aspectRatio = "portrait",
  width = 300, // Default width
  height = 300, // Default height
  className,
  ...props
}) {
  const { calories, time, proteins, carbs, fats } = recipe.information;

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={recipe.cover}
              alt={recipe.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {playlists.map((playlist) => (
                <ContextMenuItem key={playlist}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                  </svg>
                  {playlist}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{recipe.name}</h3>
        <div className="flex justify-between space-x-2">
          <div className="w-12 h-12">
            <CircularProgress
              value={time}
              maxValue={60}
              text={`${time}m`}
              color={"4caf50"}
            />
          </div>
          <div className="w-12 h-12">
            <CircularProgress
              value={calories}
              maxValue={1000}
              text={`${calories}`}
              color={"ff9800"}
            />
          </div>
          <div className="w-12 h-12">
            <CircularProgress
              value={proteins}
              maxValue={50}
              text={`${proteins}g`}
              color={"2196f3"}
            />
          </div>
          <div className="w-12 h-12">
            <CircularProgress
              value={carbs}
              maxValue={100}
              text={`${carbs}g`}
              color={"#9c27b0"}
            />
          </div>
          <div className="w-12 h-12">
            <CircularProgress
              value={fats}
              maxValue={50}
              text={`${fats}g`}
              color="#f44336"
            />
          </div>
        </div>
      </div>
    </div>
  );
}