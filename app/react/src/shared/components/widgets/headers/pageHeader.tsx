import { HeaderMainNavigation } from "./navigation/mainNavigation";
import { HeaderSubNavigation } from "./navigation/subNavigation";

interface PageHeaderProps {
  isDarkMode?: boolean;
  toggleTheme?: () => void;
}
export const PageHeader = (props: PageHeaderProps) => {
  return (
    <header className="header header-multi-line" aria-label="Page Header">
      {/* Header main-menu */}
      <div className="header__inner">
        <HeaderMainNavigation />
      </div>

      {/* Header sub-menu */}
      <HeaderSubNavigation />
    </header>
  );
};
