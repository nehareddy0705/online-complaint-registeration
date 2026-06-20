import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FileText,
  PlusCircle,
  FolderOpen,
  Users,
  Shield,
  LifeBuoy,
} from "lucide-react";

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `flex items-center space-x-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-150 ${
      isActive(path)
        ? "bg-gov-dark text-white shadow-lg shadow-gov-dark/20"
        : "text-slate-600 hover:bg-[#e9dfcf] hover:text-gov-dark"
    }`;

  const renderUserLinks = () => (
    <>
      <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
        Citizen Services
      </div>
      <Link to="/dashboard" className={linkClass("/dashboard")}>
        <FolderOpen className="w-5 h-5" />
        <span>My Grievances</span>
      </Link>
      <Link to="/complaints/new" className={linkClass("/complaints/new")}>
        <PlusCircle className="w-5 h-5" />
        <span>File New Grievance</span>
      </Link>
    </>
  );

  const renderAgentLinks = () => (
    <>
      <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
        Agent Workspace
      </div>
      <Link to="/agent" className={linkClass("/agent")}>
        <FileText className="w-5 h-5" />
        <span>Assigned Tasks</span>
      </Link>
    </>
  );

  const renderAdminLinks = () => (
    <>
      <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
        Administration
      </div>
      <Link to="/admin" className={linkClass("/admin")}>
        <Shield className="w-5 h-5" />
        <span>Admin Console</span>
      </Link>
    </>
  );

  return (
    <aside className="w-64 bg-gov-card/90 border-r border-[#d8cbb8] min-h-[calc(100vh-4rem)] flex flex-col p-4 space-y-6 shrink-0 backdrop-blur">
      {/* User Info Card inside Sidebar */}
      <div className="bg-white/70 p-4 rounded-[1.25rem] border border-[#d8cbb8] flex flex-col items-center text-center soft-ring">
        <div className="w-12 h-12 bg-gov-dark/10 rounded-full flex items-center justify-center text-gov-dark font-bold text-lg border border-gov-dark/15">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <h4 className="mt-2 text-sm font-bold text-gov-dark m-0 truncate w-full">
          {user.name}
        </h4>
        <p className="text-xs text-slate-500 m-0 truncate w-full">{user.email}</p>
        <span className="mt-2 inline-block text-[10px] font-extrabold px-2 py-0.5 bg-gov-dark/10 text-gov-dark rounded-full uppercase">
          {user.role} Portal
        </span>
      </div>

      <nav className="flex-1 space-y-1">
        {user.role === "USER" && renderUserLinks()}
        {user.role === "AGENT" && renderAgentLinks()}
        {user.role === "ADMIN" && renderAdminLinks()}
      </nav>

      {/* Support Footer in Sidebar */}
      <div className="border-t border-[#d8cbb8] pt-4">
        <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium px-2 py-1">
          <LifeBuoy className="w-4 h-4 text-gov-dark/50" />
          <span>Support Hotline: 1800-11-2200</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
