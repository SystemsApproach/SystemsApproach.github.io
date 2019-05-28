<!--- [!Note|style:flat|label:Fate of Multicast Protocols|iconVisibility:hidden] --->
> **Fate of Multicast Protocols**
>
> A number of IP multicast protocols have fallen by the wayside since
> the 1991 publication of Steve Deering's doctoral thesis, "Multicast
> Routing in a Datagram Network." In most cases, their downfall had
> something to do with scaling. The most successful early multicast
> protocol was DVMRP, which we discussed at the start of the section.
> The *Multicast Open Shortest Path First* (MOSPF) protocol was based on
> the OSPF unicast routing protocol. PIM dense mode (PIM-DM) has some
> similarity to DVMRP, in that it also uses a flood-and-prune approach;
> at the same time it is like PIM-SM in being independent of the unicast
> routing protocol used. All of these protocols are more appropriate to
> a "dense" domain, i.e., one with a high proportion of routers
> interested in the multicast. These protocols all appeared relatively
> early in the history of multicast, before some of the scaling
> challenges were fully apparent. Although they would still make sense
> within a domain for multicast groups expected to be of "dense"
> interest, they are rarely used today, in part because the routers
> usually must support PIM-SM anyway.
> 
> *Core-Based Trees* (CBT) was another approach to multicast that was
> proposed at about the same time as PIM. The IETF was initially unable
> to choose between the two approaches, and both PIM and CBT were
> advanced as "experimental" protocols. However, PIM was more widely
> adopted by industry, and the main technical contributions of
> CBT—shared trees, and bidirectional trees—were ultimately
> incorporated into PIM-SM and BIDIR-PIM respectively.
> 
> Despite all of this attention to generality and scalability, multicast
> has ultimately had the greatest impact at the edge of the Internet—the
> last hop where edge devices (most noteably, Internet-capable set-top
> boxes connected to your TV) connect to an edge IP router. At this
> point in the network, inter-domain multicast is not a big concern. The
> main thing the ISP cares about is to avoid transmiting the same video
> stream over N separate point-to-point connections just because N of
> their subscribers are watching the same TV channel.  Instead, each of
> those devices joins the multicast group that corresponds to the
> channel the viewer is watching, and the edge router can deliver a
> single multicast stream to reach all of them. For this scenario, the
> edge devices use the *Internet Group Management Protocol* (IGMP) to
> manage multicast groups.
