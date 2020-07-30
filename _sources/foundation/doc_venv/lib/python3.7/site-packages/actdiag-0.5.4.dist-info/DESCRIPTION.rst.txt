`actdiag` generate activity-diagram image file from spec-text file.

.. image:: https://drone.io/bitbucket.org/blockdiag/actdiag/status.png
   :target: https://drone.io/bitbucket.org/blockdiag/actdiag
   :alt: drone.io CI build status

.. image:: https://pypip.in/v/actdiag/badge.png
   :target: https://pypi.python.org/pypi/actdiag/
   :alt: Latest PyPI version

.. image:: https://pypip.in/d/actdiag/badge.png
   :target: https://pypi.python.org/pypi/actdiag/
   :alt: Number of PyPI downloads


Features
========

* Generate activity-diagram from dot like text (basic feature).
* Multilingualization for node-label (utf-8 only).

You can get some examples and generated images on 
`blockdiag.com <http://blockdiag.com/actdiag/build/html/index.html>`_ .

Setup
=====

Use easy_install or pip::

   $ sudo easy_install actdiag

   Or

   $ sudo pip actdiag


spec-text setting sample
========================

Few examples are available.
You can get more examples at
`blockdiag.com`_ .

simple.diag
------------

simple.diag is simply define nodes and transitions by dot-like text format::

    diagram {
      A -> B -> C;
      lane you {
        A; B;
      }
      lane me {
        C;
      }
    }


Usage
=====

Execute actdiag command::

   $ actdiag simple.diag
   $ ls simple.png
   simple.png


Requirements
============
* Python 2.6, 2.7, 3.2, 3.3, 3.4
* Pillow 2.2.1 or later
* funcparserlib 0.3.6 or later
* reportlab (optional)
* wand and imagemagick (optional)
* setuptools


License
=======
Apache License 2.0


History
=======

0.5.4 (2015-01-01)
------------------
* Follow blockdiag-1.5.0 interface

0.5.3 (2014-07-02)
------------------
* Change interface of docutils node (for sphinxcontrib module)

0.5.2 (2014-06-24)
------------------
* Add options to blockdiag directive (docutils extension)
   - :width:
   - :height:
   - :scale:
   - :align:
   - :name:
   - :class:
   - :figwidth:
   - :figclass:

0.5.1 (2013-10-22)
------------------
* Fix bugs

0.5.0 (2013-10-05)
------------------
* Support python 3.2 and 3.3 (thanks to @masayuko)
* Drop supports for python 2.4 and 2.5
* Replace dependency: PIL -> Pillow

0.4.3 (2013-02-10)
------------------
* Fix bugs

0.4.2 (2013-02-10)
------------------
* Fix bugs

0.4.1 (2012-10-28)
------------------
* Fix bugs

0.4.0 (2012-10-22)
------------------
* Optimize algorithm for rendering shadow
* Add options to docutils directive
* Fix bugs

0.3.4 (2012-09-29)
------------------
* Fix bugs

0.3.3 (2012-04-23)
------------------
* Set hyperlinks to header of lanes on SVG image
* Fill background of lane header with lane.color attribute

0.3.2 (2012-03-15)
------------------
* Fix bugs

0.3.1 (2012-02-15)
------------------
* Add autolane plugin
* Update to new package structure (blockdiag >= 1.1.2)

0.3.0 (2011-11-19)
------------------
* Add fontfamily attribute for switching fontface
* Fix bugs

0.2.4 (2011-11-10)
------------------
* Fix dependencies (do not depend PIL directly for pillow users)

0.2.3 (2011-11-06)
------------------
* Add docutils exetension
* Fix bugs

0.2.2 (2011-11-01)
------------------
* Add class feature (experimental)

0.2.1 (2011-11-01)
------------------
* Follow blockdiag-0.9.7 interface

0.2.0 (2011-10-19)
------------------
* Follow blockdiag-0.9.5 interface 

0.1.9 (2011-10-11)
------------------
* Fix bugs

0.1.8 (2011-09-30)
------------------
* Add diagram attribute: default_text_color

0.1.7 (2011-07-05)
------------------
* Fix bugs

0.1.6 (2011-07-03)
------------------
* Support input from stdin

0.1.5 (2011-05-15)
------------------
* Fix bugs

0.1.4 (2011-05-14)
------------------
* Change license to Apache License 2.0
* Support blockdiag 0.8.1 core interface 

0.1.3 (2011-04-19)
------------------
* Fix bugs

0.1.2 (2011-04-11)
------------------
* Fix bugs

0.1.1 (2011-04-10)
------------------
* Fix bugs

0.1.0 (2011-04-09)
------------------
* First release



