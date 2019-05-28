# {{ page.title }}

The main theme of this chapter was dealing with the continued growth of
the Internet. The Internet keeps on attaching more users, and each user
sends more traffic as applications such as video streaming become more
bandwidth intensive. Thus, while the Internet has proved to be a hugely
scalable system, new scaling issues continue to demand solutions. In
addition to scaling, the Internet also needs to evolve to support new
capabilities and services.

The major scaling issues today are the efficient use of address space
and the growth of routing tables as the Internet grows. The hierarchical
IP address format, with its network and host parts, gives us one level
of hierarchy to manage scale. Routing areas provide another level of
hierarchy. Autonomous systems allow us to partition the routing problem
into two parts, interdomain and intradomain routing, each of which is
much smaller than the total routing problem would be. BGP, the
interdomain routing protocol of the Internet, has been remarkably
successful in dealing with the growth of the Internet.

In spite of the many steps taken to scale IPv4, the need for a longer
address format is inevitable. This requires a new IP datagram format
and a new version of the protocol. This "new" protocol (now 20 years
old) is now known as IPv6, and it provides a 128-bit address with
(mostly) CIDR-like addressing and routing. While many new capabilities
have been claimed for IPv6, its main advantage remains its ability to
support an extremely large number of addressable devices.

Finally, the Internet also needs to evolve in function as well as size.
In that regard, we looked at three enhancements to the original IP
datagram model. The first, multicast, enables efficient delivery of the
same data to groups of receivers. As with unicast, many of the
challenges in multicast relate to scaling, and a number of different
protocols and multicast modes have been developed to optimize scaling
and routing in different environments. The second enhancement, MPLS,
brings some of the aspects of virtual circuit networks to IP and has
been widely used to extend the capabilities of IP. Applications of MPLS
range from traffic engineering to the support of virtual private
networks over the Internet. And, finally, mobility support, which was
far from the minds of the original designers of IP, is increasingly
important as more networked devices, both hosts and routers, become
mobile.

## Further Reading

Our first selection, an RFC by Bradner and Mankin, gives an informative
overview on how the rapidly growing Internet has stressed the
scalability of the original architecture, ultimately resulting IPv6. The
paper by Paxson describes a study of how routers behave in the Internet.
Even though it is more than 15 years old, it continues to be highly
cited and is a good example of how researchers study the dynamic
behavior of the Internet. The final paper discusses multicast,
presenting the approach to multicast originally used on the MBone.

- Bradner, S., and A. Mankin. The recommendation for the next
   generation IP protocol. *Request for Comments* 1752, January 1995.

- Paxson, V. End-to-end routing behavior in the Internet. *SIGCOMM
   '96*, pages 25--38, August 1996.

- Deering, S., and D. Cheriton. Multicast routing in datagram
   internetworks and extended LANs. *ACM Transactions on Computer
   Systems* 8(2):85--110, May 1990.
