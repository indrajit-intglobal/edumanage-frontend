import { Grid, View } from "@adobe/react-spectrum";

export default function Layout() {
  return (
    <Grid
      areas={["header  header", "sidebar content", "footer  footer"]}
      columns={["size-3000", "1fr"]}
      rows={["size-1000", "auto", "size-800"]}
      height="100vh"
    >
      {/* Header */}
      <View backgroundColor="celery-600" gridArea="header" padding="size-200">
        Navbar
      </View>

      {/* Sidebar */}
      <View backgroundColor="blue-600" gridArea="sidebar" padding="size-200">
        Sidebar
      </View>

      {/* Content */}
      <View backgroundColor="purple-600" gridArea="content" padding="size-200">
        Content
      </View>

      {/* Footer */}
      <View backgroundColor="magenta-600" gridArea="footer" padding="size-200">
        Footer
      </View>
    </Grid>
  );
}
