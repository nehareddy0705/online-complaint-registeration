import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Landmark, LogOut, User, ChevronRight } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getDashboardLink = () => {
    if (!user) return "/";
    if (user.role === "ADMIN") return "/admin";
    if (user.role === "AGENT") return "/agent";
    return "/dashboard";
  };

  return (
    <header className="sticky top-0 z-40 text-white border-b border-white/10 shadow-[0_10px_40px_rgba(36,56,77,0.22)] bg-gov-dark/95 backdrop-blur">
      <div className="bg-white/5 text-[11px] text-white/70 py-1 px-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-[0.22em] uppercase text-white/90">Civic grievance portal</span>
          <span className="hidden sm:inline text-white/50">•</span>
          <span className="hidden sm:inline text-white/60">Simple, secure, tracked</span>
        </div>
        <div className="flex items-center space-x-3 text-white/60">
          <a
            href="https://online-complaint-registeration.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer hover:text-white transition"
          >
            Live Site
          </a>
          <span className="cursor-pointer hover:text-white transition">Help</span>
          <span>|</span>
          <span className="cursor-pointer hover:text-white transition">English</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <Link to={user ? getDashboardLink() : "/"} className="flex items-center space-x-3 group">
          <div className="bg-gov-card/95 p-2.5 rounded-2xl text-gov-dark group-hover:-translate-y-0.5 transition shadow-lg shadow-black/10">
            <Landmark className="w-6 h-6" />
          </div>
          <div className="leading-tight">
            <h1 className="text-lg sm:text-xl font-bold tracking-tight m-0 text-white flex items-center gap-2">
              Sahaay
              <ChevronRight className="w-4 h-4 text-gov-secondary opacity-80" />
            </h1>
            <p className="text-[10px] text-white/70 font-medium tracking-[0.24em] -mt-0.5 m-0 uppercase">
              Complaint tracking made simple
            </p>
          </div>
        </Link>

        <nav className="flex items-center space-x-4">
          {!user && (
            <Link
              to="/"
              className="text-sm font-semibold hover:text-gov-secondary transition py-2 px-1 text-slate-100"
            >
              Home
            </Link>
          )}

          {user ? (
            <>
              <div className="hidden md:flex items-center space-x-2 bg-white/8 border border-white/10 py-1.5 px-3 rounded-full">
                <User className="w-3.5 h-3.5 text-gov-secondary" />
                <span className="text-xs font-medium max-w-30 truncate">
                  {user.name}
                </span>
                <span className="text-[10px] bg-gov-secondary text-gov-dark font-bold px-2 py-0.5 rounded-full uppercase scale-90">
                  {user.role}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold py-2 px-3 rounded-full transition border border-white/10"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </>
          ) : (
            <div className="flex items-center space-x-3">
              <Link
                to="/login"
                className="text-sm font-semibold hover:text-gov-secondary transition py-2 px-2 text-slate-100"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-gov-secondary hover:bg-[#adc4d1] text-gov-dark font-bold text-xs py-2 px-4 rounded-full shadow-lg shadow-black/10 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
