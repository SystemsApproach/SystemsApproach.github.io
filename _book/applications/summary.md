# {{ page.title }}

We have seen two of the most widely used client/server-based application
protocols: SMTP used to exchange electronic mail and HTTP used to walk
the World Wide Web. We have seen how application-to-application
communication is driving the creation of new protocol development
frameworks such as SOAP and REST. And we have examined session control
protocols, such as SIP and H.323, which are used to control multimedia
applications such as Voice over IP. In addition to these application
protocols, we looked at some critical supporting protocols: the DNS
protocol used by the Domain Naming System and SNMP used to query remote
nodes for the sake of network management. Finally, we looked at a
class of applications—including overlay, peer-to-peer, and content
distribution networks—that blend application processing and packet
forwarding in yinnovative ways.

Application protocols are a curious lot. In many ways, the traditional
client/server applications are like another layer of transport protocol,
except they have application-specific knowledge built into them. You
could argue that they are just specialized transport protocols, and that
transport protocols get layered on top of each other until producing the
precise service needed by the application. Similarly, the overlay and
peer-to-peer protocols can be viewed as providing an alternative
infrastructure, but, again, one that is tailored for a particular
application's needs. One sure lesson we draw from this observation is
that designing application-level protocols is really no different than
designing core network protocols, and that the more one understands
about the latter the better they will do designing the former. We also
observe that the systems approach—understanding how functions and
components interact to build a complete system—applies at least as
much in the design of applications as in any other aspect of networking.

## Further Reading

Our first article provides an interesting perspective on the early
design and implementation of the World Wide Web, written by its
inventors before it had taken the world by storm. The development of DNS
is well described by Mockapetris and Dunlap. Overlays, CDNs, and
peer-to-peer networks have been extensively researched in recent years,
and the last six research papers provide a good place to start
understanding the issues.

- Berners-Lee, T., R. Caillia, A. Luotonen, H. Nielsen, and A. Secret.
    The World-Wide Web. *Communications of the ACM* 37(8), pages 76-82,
    August 1994.

- Mockapetris, P., and K. Dunlap. Development of the Domain Name
    System. *Proceedings of the SIGCOMM '88 Symposium*, pages 123-133,
    August 1988.

- Karger, D. et al. Consistent hashing and random trees: Distributed
    caching protocols for relieving hot spots on the World Wide Web.
    *Proceedings of the ACM Symposium on Theory of Computing*, pages
    654-663, May 1997.

- Chu, Y., S. Rao, and H. Zhang. A case for End System Multicast.
    *Proceedings of the ACM SIGMETRICS '00 Conference*, pages 1-12,
    June 2000.

- Andersen, D. et al. Resilient overlay networks. *Proceedings of the
    18th ACM Symposium on Operating Systems Principles (SOSP)*, pages
    131-145, October 2001.

- Rowstron, A., and P. Druschel. Storage management and caching in
    PAST, a large-scale persistent peer-to-peer storage utility.
    *Proceedings of the 18th ACM Symposium on Operating Systems
    Principles (SOSP)*, pages 188-201, October 2001.

- Stoica, I. et al. Chord: A scalable peer-to-peer lookup service for
    Internet applications. *Proceedings of the ACM SIGCOMM Conference*,
    pages 149-160, August 2001.

- Ratnasamy, S. et al. A scalable content-addressable network.
    *Proceedings of ACM SIGCOMM '01*, pages 161-172, August 2001.
