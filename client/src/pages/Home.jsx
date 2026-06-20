import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FileText,
  MessageSquare,
  ShieldCheck,
  Zap,
  ArrowRight,
  UserCheck,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      if (user.role === "ADMIN") {
        navigate("/admin", { replace: true });
      } else if (user.role === "AGENT") {
        navigate("/agent", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    }
  }, [user, navigate]);

  const getStartedPath = () => {
    if (!user) return "/register";
    if (user.role === "ADMIN") return "/admin";
    if (user.role === "AGENT") return "/agent";
    return "/dashboard";
  };

  return (
    <div className="flex-1 bg-gov-light flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-16 sm:py-24 px-4 bg-linear-to-r from-[#24384d] via-[#3f5f78] to-[#5f7f99] shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]">
        <div className="absolute inset-0 opacity-45 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,250,242,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(243,235,221,0.16),transparent_26%)]"></div>
        <div className="absolute -top-24 right-[-5%] h-72 w-72 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 left-[-5%] h-72 w-72 rounded-full bg-[#95b2c1]/20 blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/15 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 shadow-lg shadow-black/10">
            <ShieldCheck className="w-4 h-4" />
            <span>Official civic redressal workflow</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto drop-shadow-sm">
            A simpler way to track and resolve complaints
          </h2>

          <p className="text-slate-100/85 text-sm sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Register your complaints online, chat in real-time with assigned officers, 
            and track the resolution process of civic, public service, and administrative issues.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to={getStartedPath()}
              className="w-full sm:w-auto bg-gov-light hover:bg-[#e8ddc9] text-gov-dark font-bold px-8 py-3.5 rounded-full shadow-xl shadow-black/10 hover:shadow-2xl transition-all duration-150 flex items-center justify-center space-x-2 text-sm sm:text-base group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            {!user && (
              <Link
                to="/login"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold px-8 py-3.5 rounded-full transition-all duration-150 flex items-center justify-center text-sm sm:text-base backdrop-blur-sm"
              >
                Sign In to Account
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="bg-gov-card/95 border-y border-[#d8cbb8] py-6 px-4 shadow-sm">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-gov-dark">99.4%</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Resolution Rate</div>
          </div>
          <div className="border-l border-[#d8cbb8]">
            <div className="text-2xl sm:text-3xl font-extrabold text-gov-dark">24 Hours</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Avg Assignment Time</div>
          </div>
          <div className="border-l md:border-l border-[#d8cbb8]">
            <div className="text-2xl sm:text-3xl font-extrabold text-gov-dark">10k+</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Active Citizens</div>
          </div>
          <div className="border-l border-[#d8cbb8]">
            <div className="text-2xl sm:text-3xl font-extrabold text-gov-dark">100%</div>
            <div className="text-xs text-slate-500 font-semibold mt-1">Encrypted & Secure</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-dark mb-4">
            What You Can Do
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            Submit issues, follow progress, and connect with the right officer without the usual back-and-forth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="surface-panel p-6 rounded-[1.25rem] flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gov-dark/10 text-gov-dark rounded-2xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gov-dark mb-2">File in Minutes</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Add your issue, location details, and priority in a clean guided form.
            </p>
          </div>

          {/* Card 2 */}
          <div className="surface-panel p-6 rounded-[1.25rem] flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gov-dark/10 text-gov-dark rounded-2xl flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gov-dark mb-2">Chat for Updates</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Stay in touch with the assigned officer and exchange updates in one thread.
            </p>
          </div>

          {/* Card 3 */}
          <div className="surface-panel p-6 rounded-[1.25rem] flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gov-dark/10 text-gov-dark rounded-2xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gov-dark mb-2">Move Faster</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Complaints are routed quickly so the right team can act without delay.
            </p>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-gov-card/95 py-16 sm:py-20 px-4 border-t border-[#d8cbb8]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gov-dark mb-4">
              How It Works
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              A simple flow from filing to review, updates, and resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection Line for Desktop */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-[#d8cbb8] z-0"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-[#e8ddc9] text-gov-dark rounded-full flex items-center justify-center font-bold text-lg border border-[#d8cbb8] shadow-sm mb-4">
                01
              </div>
              <h4 className="text-sm font-bold text-gov-dark mb-1">Registration</h4>
              <p className="text-[11px] text-slate-400 max-w-37.5">
                Citizen registers and fills the grievance form.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-[#e8ddc9] text-gov-dark rounded-full flex items-center justify-center font-bold text-lg border border-[#d8cbb8] shadow-sm mb-4">
                02
              </div>
              <h4 className="text-sm font-bold text-gov-dark mb-1">Assignment</h4>
              <p className="text-[11px] text-slate-400 max-w-37.5">
                Administrator reviews and assigns an agent.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-[#e8ddc9] text-gov-dark rounded-full flex items-center justify-center font-bold text-lg border border-[#d8cbb8] shadow-sm mb-4">
                03
              </div>
              <h4 className="text-sm font-bold text-gov-dark mb-1">Investigation</h4>
              <p className="text-[11px] text-slate-400 max-w-37.5">
                Agent chats with citizen, processes issues.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="w-16 h-16 bg-gov-dark text-gov-light rounded-full flex items-center justify-center font-bold text-lg border border-gov-dark shadow-sm mb-4">
                04
              </div>
              <h4 className="text-sm font-bold text-gov-dark mb-1">Resolution</h4>
              <p className="text-[11px] text-slate-400 max-w-37.5">
                Agent marks as resolved and citizen submits feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Support micro-bar */}
      <footer className="mt-auto bg-gov-dark text-white/65 py-6 px-4 border-t border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-center sm:text-left space-y-3 sm:space-y-0">
          <p className="m-0">© 2026 Sahaay. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://online-complaint-registeration.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white cursor-pointer transition"
            >
              Live Site
            </a>
            <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition">Helpdesk Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
