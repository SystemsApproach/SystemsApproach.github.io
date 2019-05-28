<!--- [!Note|style:flat|label:Defining Throughput|iconVisibility:hidden] --->
> **Defining Throughput**
>
> It turns out to be difficult to define precisely the throughput of a
> switch. Intuitively, we might think that if a switch has $$n$$ inputs
> that each support a link speed of $$s_{i}$$, then the throughput would
> just be the sum of all the $$s_{i}$$. This is actually the best
> possible throughput that such a switch could provide, but in practice
> almost no real switch can guarantee that level of performance. One
> reason for this is simple to understand. Suppose that, for some period
> of time, all the traffic arriving at the switch needed to be sent to
> the same output. As long as the bandwidth of that output is less than
> the sum of the input bandwidths, then some of the traffic will need to
> be either buffered or dropped. With this particular traffic pattern,
> the switch could not provide a sustained throughput higher than the
> link speed of that one output. However, a switch might be able to
> handle traffic arriving at the full link speed on all inputs if it is
> distributed across all the outputs evenly; this would be considered
> optimal.
> 
> Another factor that affects the performance of switches is the size of
> packets arriving on the inputs. For an ATM switch, this is normally
> not an issue because all "packets" (cells) are the same length. But
> for Ethernet switches or IP routers, packets of widely varying sizes
> are possible. Some of the operations that a switch must perform have a
> constant overhead per packet, so a switch is likely to perform
> differently depending on whether all arriving packets are very short,
> very long, or mixed. For this reason, routers or switches that forward
> variable-length packets are often characterized by a *packet per
> second* (pps) rate as well as a throughput in bits per second. The pps
> rate is usually measured with minimum-sized packets.
> 
> The first thing to notice about this discussion is that the throughput
> of the switch is a function of the traffic to which it is subjected.
> One of the things that switch designers spend a lot of their time
> doing is trying to come up with traffic models that approximate the
> behavior of real data traffic. It turns out that it is extremely
> difficult to achieve accurate models. There are several elements to a
> traffic model. The main ones are (1) when do packets arrive, (2) what
> outputs are they destined for, and (3) how big are they.
>
> Traffic modeling is a well-established science that has been
> extremely successful in the world of telephony, but the rapid
> evolution of computer communications, where a new application can
> change the traffic patterns almost overnight, has made effective
> modeling of computer networks much more difficult.

