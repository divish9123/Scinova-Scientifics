import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

/**
 * A custom Router component that handles page routing and
 * scrolls the window to the top on every route change.
 */
function Router() {
  // useLocation is a hook from 'wouter' that gives us the current URL path.
  const [location] = useLocation();

  // useEffect is a React hook that runs side effects.
  // We use it here to scroll the window to the top.
  // The effect runs every time the `location` variable changes.
  useEffect(() => {
    // The scroll function is placed inside a setTimeout with a delay.
    // This gives the new page content time to render, preventing the scroll from being immediately overwritten.
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * The main App component that sets up all the providers
 * and renders the Router.
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;