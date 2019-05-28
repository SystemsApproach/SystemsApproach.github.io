<!--- [!Note|style:flat|label:Naming Conventions|iconVisibility:hidden] --->
> **Naming Conventions**
>
> Our description of DNS focuses on the underlying *mechanisms*, that
> is, how the hierarchy is partitioned over multiple servers and how the
> resolution process works. There is an equally interesting, but much
> less technical, issue of the *conventions* that are used to decide the
> names to use in the mechanism. For example, it is by convention that
> all U.S. universities are under the `edu` domain, while
> English universities are under the `ac` (academic)
> subdomain of the `uk` (United Kingdom) domain. (In a trendy twist
> on convention, ultra-cool startups often register their names in the
> `.io` domain, which is actually the country domain for the British
> Indian Ocean Territory.)
> 
> The thing to understand about conventions is that they are sometimes
> defined without anyone making an explicit decision. For example, by
> convention a site hides the exact host that serves as its mail
> exchange behind the MX record. An alternative would
> have been to adopt the convention of sending mail to
> `user@mail.cs.princeton.edu`, much as we expect to find
> a site's public FTP directory at `ftp.cs.princeton.edu`
> and its WWW server at `www.cs.princeton.edu`. This last
> one is so prevalent that many people do not even realize it is just a
> convention. It may be splitting hairs, but what makes this a convention
> is that nothing in the implementation of DNS enforces that names or
> record types be used as intended.
> 
> Conventions also exist at the local level, where an organization names
> its machines according to some consistent set of rules. Given that the
> host names `venus`, `saturn`, and
> `mars` are among the most popular in the Internet, it's
> not too hard to figure out one common naming convention. Some host
> naming conventions are more imaginative, however. For example, one
> site named its machines `up`, `down`, `crashed`, `rebooting`, and so
> on, resulting in confusing statements like "rebooting has crashed" and
> "up is down." Of course, there are also less imaginative names, such as
> those who name their machines after the integers.
