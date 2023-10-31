"use client"
import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import { signIn } from "next-auth/react";

const Header = () => {

  const handleLogin = async () => {
    await signIn();
  }
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
        <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>
          <div className="mt-2 flex flex-col gap-3">
          <Button variant="outline" onClick={handleLogin} className="w-full justify-start gap-1">
            <LogInIcon />
            Login
            </Button>

            <Button variant="outline" className="w-full justify-start gap-1">
            <HomeIcon />
            Home
            </Button>

            <Button variant="outline" className="w-full justify-start gap-1">
            <PercentIcon />
            Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-1">
            <ListOrderedIcon />
            Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">INFO</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
