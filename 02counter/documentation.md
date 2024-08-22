# URL: https://github.com/acdlite/react-fiber-architecture

# Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.
# What is reconciliation?
    # reconciliation
        The algorithm React uses to diff one tree with another to determine which parts need to be changed.
    # update
        A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.
# Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."

# Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

    # Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
    # Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

# The key points are:

    # In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
    # Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
    # A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.

# What is a fiber?
We're about to discuss the heart of React Fiber's architecture. Fibers are a much lower-level abstraction than application developers typically think about. If you find yourself frustrated in your attempts to understand it, don't feel discouraged. Keep trying and it will eventually make sense. (When you do finally get it, please suggest how to improve this section.)

