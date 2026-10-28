package com.training.project.core.models;

import java.util.Collections;
import java.util.List;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;

@Model(
        adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class ArticleLayoutModel {

    @Inject
    private String aboutText;

    @Inject
    private String ctaHeading;

    @Inject
    private String ctaButtonText;

    @Inject
    private String ctaLink;

    public String getCtaHeading() {
        return ctaHeading;
    }

    public String getCtaButtonText() {
        return ctaButtonText;
    }

    public String getCtaLink() {
        return ctaLink;
    }

    @ChildResource
    private List<Section> sections;

    public String getAboutText() {
        return aboutText;
    }

    public List<Section> getSections() {
        return sections != null ? sections : Collections.emptyList();
    }


}