import ErrorBoundary from './Errors/ErrorBoundary';
import TestFuntion from './Errors/TestFuntion';
import Two from './Errors/Two';

export default function Error_Boundaries_Exp(){

    return(
<>
<div>
      <p>
        <b>
          This is an example of error boundaries in React 16.
          <br /><br />
          Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <hr />
      <ErrorBoundary >
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <TestFuntion />
        <Two />
      </ErrorBoundary>
      <hr />
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary><TestFuntion /></ErrorBoundary>
      <ErrorBoundary><Two /></ErrorBoundary>
    </div>



    {/* <TestFuntion/>
    <Two/> */}
</>
    );
}