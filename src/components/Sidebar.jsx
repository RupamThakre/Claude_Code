import { useState, useEffect, useId } from "react";

import { Link } from "react-router-dom";
import data, { sidebarCategories } from "../data";

function TopicGroup({ topicName, topic, activeTopicSlug, activeSubtopicSlug }) {
  const isActive = topic.slug === activeTopicSlug;
  const [expanded, setExpanded] = useState(isActive);
  const listId = useId();

  useEffect(() => {
    if (isActive) setExpanded(true);
  }, [isActive]);

  return (
    <div className="sidebar-group">
      <button
        className="sidebar-heading"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={listId}
      >
        <span className="sidebar-icon" aria-hidden="true">
          {topic.icon}
        </span>
        <span className="sidebar-topic-name">{topicName}</span>
        <span
          className={`sidebar-chevron${expanded ? "" : " sidebar-chevron--collapsed"}`}
          aria-hidden="true"
        >
          ›
        </span>
      </button>

      <ul
        id={listId}
        className={`sidebar-list${expanded ? "" : " sidebar-list--collapsed"}`}
        role="list"
      >
        {Object.entries(topic.subs).map(([subName, sub]) => (
          <li key={sub.slug}>
            <Link
              to={`/${topic.slug}/${sub.slug}`}
              className={`sidebar-link${
                isActive && sub.slug === activeSubtopicSlug
                  ? " sidebar-link--active"
                  : ""
              }`}
            >
              {subName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar({ topicSlug, subtopicSlug }) {
  const allTopics = { ...data, ...sidebarCategories };

  return (
    <aside className="sidebar" aria-label="Topics">
      {Object.entries(allTopics).map(([topicName, topic]) => (
        <TopicGroup
          key={topic.slug}
          topicName={topicName}
          topic={topic}
          activeTopicSlug={topicSlug}
          activeSubtopicSlug={subtopicSlug}
        />
      ))}
    </aside>
  );
}
