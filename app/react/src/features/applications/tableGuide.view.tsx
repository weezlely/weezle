import { GuideTemplate, GuidTemplateProps } from "@/shared/templates";

interface TableGuideViewProps extends GuidTemplateProps {
  loading: boolean;
  error: Error | null | string;
}

export const TableGuideView = (props: TableGuideViewProps) => {
  const { loading, error, ...rest } = props;

  if (loading) return <div>로딩중...</div>;

  return <GuideTemplate {...rest} />;
};
