import { GuideTemplate, GuidTemplateProps } from "@/shared";

interface TableLibraryDocsViewProps extends GuidTemplateProps {
  loading: boolean;
  error: Error | null | string;
}

export const TableLibraryDocsView = (props: TableLibraryDocsViewProps) => {
  const { loading, error, ...rest } = props;

  if (loading) return <div>로딩중...</div>;

  return <GuideTemplate {...rest} />;
};
