<!--- [!Note|style:flat|label:Tahoe, Reno, and Vegas|iconVisibility:hidden] --->
> **Tahoe, Reno, and Vegas**
>
> The name "TCP Vegas" is a takeoff on earlier implementations of TCP
> that were distributed in releases of 4.3 BSD Unix. These releases were
> known as Tahoe and Reno (which, like Las Vegas, are places in Nevada),
> and the versions of TCP became known by the names of the BSD release.
> TCP Tahoe, which is also known as BSD Network Release 1.0 (BNR1),
> corresponds to the original implementation of Jacobson's
> congestion-control mechanism and includes all of the mechanisms
> described in this book except fast recovery.  TCP Reno, which is also
> known as BSD Network Release 2.0 (BNR2), adds the fast recovery
> mechanism, along with an optimization known as *header
> prediction*—optimizing for the common case that segments arrive in
> order. TCP Reno also supports *delayed ACKs*—acknowledging every
> other segment rather than every segment—although this is a
> selectable option that is sometimes turned off. A version of TCP
> distributed in 4.4 BSD Unix added the "big windows" extensions.
> 
> With the rising popularity of Linux, and an increase in the number of
> researchers looking at TCP congestion control, the situation has grown
> considerably more complex. Linux today offers a range of settings for
> TCP congestion control, with Vegas being one option and TCP CUBIC
> being the default. The whole idea of using place names to refer to TCP
> variants has been taken up enthusiastically (TCP-Illinois and TCP-Westwood
> are two examples).
> 
> All that can be said with any certainty is that any two
> implementations of TCP that follow the original specification, while
> they should interoperate, will not necessarily perform well.
> Recognizing the performance implications of interactions among TCP
> variants is a tricky business. In other words, you could argue that
> TCP is no longer defined by a specification, but rather by an
>implementation. The only question is, which implementation?
