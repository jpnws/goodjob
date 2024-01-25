import JobTable from './JobTable';
import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  root: {
    fontFamily: 'system-ui, sans-serif',
  },
});

function App() {
  return (
    <main {...stylex.props(styles.root)}>
      Hello from React.
      <JobTable />
    </main>
  );
}

export default App;
