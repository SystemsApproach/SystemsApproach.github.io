<!--- [!Note|style:flat|label:What Layer is RPC?|iconVisibility:hidden] --->
> **What Layer is RPC?**
>
> Once again, the "What layer is this?" issue raises its ugly head. To
> many people, especially those who adhere to a strictly layerist view
> of protocol architecture, RPC is implemented on top of a transport
> protocol (TCP or UDP) and so cannot itself (by definition) be a
> transport protocol. It is certainly valid, however, to argue that 
> RPC offers a process-to-process service that is fundamentally
> different from that offered by TCP and UDP.
>
> Interestingly, there are other people who believe that RPC is the most
> important protocol, and that TCP/IP is just what you do
> when you want to go "off site." This was the predominant view of the
> distributed systems community, which built countless OS kernels
> over the years that contained exactly one protocol—you guessed
> it, RPC—which ran directly on top of a network device driver for
> performance reasons.
>
> Our position is that any protocol that offers process-to-process
> service, as opposed to node-to-node or host-to-host service, qualifies
> as a transport protocol. Thus, RPC is a transport protocol, and it's
> perfectly legitimate to build on transport protocol on top of one or more
> other transport protocols. This is essentially how RPC has evolved in the
> Internet, as discussed in the last section of this Chapter.
