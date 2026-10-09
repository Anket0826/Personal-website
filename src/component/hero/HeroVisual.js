import React, { useState } from "react";
import "../../styles/HeroVisual.scss";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  FiZap,
  FiTrendingUp,
  FiCheckCircle,
  FiCpu,
  FiLayers,
  FiAward,
} from "react-icons/fi";
import { SiMongodb, SiRedux } from "react-icons/si";

const HeroVisual = () => {
  const [activeTab, setActiveTab] = useState("ecosystem");

  return (
    <div className="hero_visual_container">
      {/* Background Holographic Aura */}
      <div className="hologram_aura aura_primary" />
      <div className="hologram_aura aura_secondary" />

      {/* Orbit Rings System */}
      <div className="orbit_system">
        <div className="orbit_ring ring_outer">
          <div className="orbit_node node_react" title="React.js Specialist">
            <FaReact className="spin_react" />
            <span className="node_tooltip">React.js</span>
          </div>
          <div className="orbit_node node_node" title="Node.js & Express">
            <FaNodeJs />
            <span className="node_tooltip">Node.js</span>
          </div>
        </div>

        <div className="orbit_ring ring_middle">
          <div className="orbit_node node_js" title="JavaScript ES6+">
            <FaJs />
            <span className="node_tooltip">JavaScript</span>
          </div>
          <div className="orbit_node node_mongo" title="MongoDB Database">
            <SiMongodb />
            <span className="node_tooltip">MongoDB</span>
          </div>
        </div>

        <div className="orbit_ring ring_inner">
          <div className="orbit_node node_git" title="Git Workflow">
            <FaGitAlt />
            <span className="node_tooltip">Git & CI/CD</span>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Command Center Card */}
      <div className="command_card">
        {/* Card Header with Status & Mode Selector */}
        <div className="card_header">
          <div className="live_status">
            <span className="live_dot" />
            <span className="live_text">SYSTEM ONLINE</span>
          </div>
          <div className="view_switcher">
            <button
              className={`switch_btn ${activeTab === "ecosystem" ? "active" : ""}`}
              onClick={() => setActiveTab("ecosystem")}
            >
              Overview
            </button>
            <button
              className={`switch_btn ${activeTab === "metrics" ? "active" : ""}`}
              onClick={() => setActiveTab("metrics")}
            >
              Metrics
            </button>
          </div>
        </div>

        {/* Dynamic Card Body based on activeTab */}
        {activeTab === "ecosystem" ? (
          <div className="card_body ecosystem_view">
            {/* Centerpiece Monogram & Halo */}
            <div className="core_badge_wrapper">
              <div className="core_halo" />
              <div className="core_badge">
                <FaCode className="core_icon" />
              </div>
            </div>

            <h3 className="core_title">ANKET PAWAR</h3>
            <p className="core_subtitle">Full-Stack Software Engineer</p>

            {/* Quick KPI Counters */}
            <div className="kpi_row">
              <div className="kpi_item">
                <span className="kpi_num">2+</span>
                <span className="kpi_label">Years Exp</span>
              </div>
              <div className="kpi_divider" />
              <div className="kpi_item">
                <span className="kpi_num">25+</span>
                <span className="kpi_label">Projects</span>
              </div>
              <div className="kpi_divider" />
              <div className="kpi_item">
                <span className="kpi_num">100%</span>
                <span className="kpi_label">Success</span>
              </div>
            </div>

            {/* Live Activity Soundwave Visualizer */}
            <div className="activity_stream">
              <span className="stream_label">Live Code Activity</span>
              <div className="equalizer_bars">
                <span className="bar bar_1" />
                <span className="bar bar_2" />
                <span className="bar bar_3" />
                <span className="bar bar_4" />
                <span className="bar bar_5" />
                <span className="bar bar_6" />
                <span className="bar bar_7" />
                <span className="bar bar_8" />
                <span className="bar bar_9" />
                <span className="bar bar_10" />
                <span className="bar bar_11" />
                <span className="bar bar_12" />
              </div>
            </div>
          </div>
        ) : (
          <div className="card_body metrics_view">
            <div className="metric_tile">
              <div className="tile_icon green">
                <FiZap />
              </div>
              <div className="tile_data">
                <span className="tile_val">100 / 100</span>
                <span className="tile_sub">Lighthouse Web Performance</span>
              </div>
            </div>

            <div className="metric_tile">
              <div className="tile_icon blue">
                <FiTrendingUp />
              </div>
              <div className="tile_data">
                <span className="tile_val">Production Ready</span>
                <span className="tile_sub">Full-Stack Scalable Architecture</span>
              </div>
            </div>

            <div className="metric_tile">
              <div className="tile_icon purple">
                <FiCpu />
              </div>
              <div className="tile_data">
                <span className="tile_val">Clean & Modular</span>
                <span className="tile_sub">Maintainable React & Node.js code</span>
              </div>
            </div>
          </div>
        )}

        {/* Card Footer */}
        <div className="card_footer">
          <span className="location_tag">📍 Nashik, Maharashtra</span>
          <span className="uptime_tag">🟢 Available for Projects</span>
        </div>
      </div>

      {/* Floating Satellite Cards */}
      <div className="satellite_badge badge_top">
        <FiAward className="sat_icon gold" />
        <div>
          <strong>Top Tier Dev</strong>
          <span>Clean Code & Architecture</span>
        </div>
      </div>

      <div className="satellite_badge badge_bottom">
        <FiCheckCircle className="sat_icon emerald" />
        <div>
          <strong>100% Mobile Ready</strong>
          <span>Fluid Responsive UX</span>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
